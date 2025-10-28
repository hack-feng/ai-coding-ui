import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RichTextEditor from './components/RichTextEditor';

// 文章发布页面
const ArticlePublishPage = () => {
  const handleSave = (data) => {
    console.log('文章保存:', data);
    // 这里可以添加实际的保存逻辑
  };

  const handleDraftSave = (data) => {
    console.log('文章草稿保存:', data);
    // 这里可以添加实际的草稿保存逻辑
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">发布文章</h1>
      </div>
      <RichTextEditor
        pageName="文章发布"
        initialTitle=""
        initialContent=""
        onSave={handleSave}
        onDraftSave={handleDraftSave}
      />
    </div>
  );
};

// 动态发布页面
const StatusPublishPage = () => {
  const handleSave = (data) => {
    console.log('动态保存:', data);
    // 这里可以添加实际的保存逻辑
  };

  const handleDraftSave = (data) => {
    console.log('动态草稿保存:', data);
    // 这里可以添加实际的草稿保存逻辑
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">发布动态</h1>
      </div>
      <RichTextEditor
        pageName="动态发布"
        initialTitle=""
        initialContent=""
        onSave={handleSave}
        onDraftSave={handleDraftSave}
      />
    </div>
  );
};

// 问卷发布页面
const SurveyPublishPage = () => {
  const handleSave = (data) => {
    console.log('问卷保存:', data);
    // 这里可以添加实际的保存逻辑
  };

  const handleDraftSave = (data) => {
    console.log('问卷草稿保存:', data);
    // 这里可以添加实际的草稿保存逻辑
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">发布问卷</h1>
      </div>
      <RichTextEditor
        pageName="问卷发布"
        initialTitle=""
        initialContent=""
        onSave={handleSave}
        onDraftSave={handleDraftSave}
      />
    </div>
  );
};

// 讨论发布页面
const DiscussionPublishPage = () => {
  const handleSave = (data) => {
    console.log('讨论保存:', data);
    // 这里可以添加实际的保存逻辑
  };

  const handleDraftSave = (data) => {
    console.log('讨论草稿保存:', data);
    // 这里可以添加实际的草稿保存逻辑
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">发布讨论</h1>
      </div>
      <RichTextEditor
        pageName="讨论发布"
        initialTitle=""
        initialContent=""
        onSave={handleSave}
        onDraftSave={handleDraftSave}
      />
    </div>
  );
};

// 我的草稿页面
const DraftsPage = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">我的草稿</h1>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>这里显示您保存的所有草稿...</p>
      </div>
    </div>
  );
};

// 我的发布页面
const MyPublishPage = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">我的发布</h1>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>这里显示您已发布的所有内容...</p>
      </div>
    </div>
  );
};

// 设置页面
const SettingsPage = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">设置</h1>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>这里是设置页面...</p>
      </div>
    </div>
  );
};

// 首页/默认页面
const HomePage = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className="content-title">欢迎来到社区内容发布平台</h1>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>请从左侧菜单选择要发布的内容类型</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publish/article" element={<ArticlePublishPage />} />
          <Route path="/publish/status" element={<StatusPublishPage />} />
          <Route path="/publish/survey" element={<SurveyPublishPage />} />
          <Route path="/publish/discussion" element={<DiscussionPublishPage />} />
          <Route path="/drafts" element={<DraftsPage />} />
          <Route path="/my-publish" element={<MyPublishPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;