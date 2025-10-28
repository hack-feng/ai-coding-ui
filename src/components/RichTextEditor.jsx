import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';

const RichTextEditor = ({ pageName, initialTitle = '', initialContent = '', onSave, onDraftSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [toast, setToast] = useState(null);
  const quillRef = useRef(null);
  const quillInstanceRef = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (quillRef.current && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
          ]
        },
        placeholder: '开始编写内容...'
      });

      // Set initial content if provided
      if (initialContent) {
        quillInstanceRef.current.root.innerHTML = initialContent;
      }

      // Listen for text changes
      quillInstanceRef.current.on('text-change', () => {
        setContent(quillInstanceRef.current.root.innerHTML);
      });
    }

    return () => {
      if (quillInstanceRef.current) {
        quillInstanceRef.current = null;
      }
    };
  }, [initialContent]);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Handle save action
  const handleSave = () => {
    if (!title.trim()) {
      showToast('请输入标题', 'error');
      return;
    }

    if (!content.trim()) {
      showToast('请输入内容', 'error');
      return;
    }

    // Simulate API call
    const success = Math.random() > 0.1; // 90% success rate

    if (success) {
      showToast(`${pageName}保存成功`);
      if (onSave) {
        onSave({ title, content });
      }
    } else {
      showToast(`${pageName}保存失败，请重试`, 'error');
    }
  };

  // Handle draft save action
  const handleDraftSave = () => {
    // Draft can be saved with empty content
    const success = Math.random() > 0.05; // 95% success rate

    if (success) {
      showToast(`${pageName}草稿保存成功`);
      if (onDraftSave) {
        onDraftSave({ title, content });
      }
    } else {
      showToast(`${pageName}草稿保存失败，请重试`, 'error');
    }
  };

  return (
    <div className="rich-text-editor">
      <div className="editor-header">
        <input
          type="text"
          className="editor-title-input"
          placeholder="请输入标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <button className="btn btn-secondary" onClick={handleDraftSave}>
            <span className="menu-icon">💾</span>
            保存草稿
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <span className="menu-icon">📝</span>
            发布
          </button>
        </div>
      </div>
      <div className="editor-container">
        <div ref={quillRef} />
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;