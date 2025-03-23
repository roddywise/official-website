document.addEventListener('DOMContentLoaded', () => {
  // 定义平滑滚动函数
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 订阅表单事件
  const subscribeForm = document.getElementById('subscribe-form');
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input[type="email"]').value;
    alert(`感谢订阅：${email}`);
    subscribeForm.reset();
  });
});
