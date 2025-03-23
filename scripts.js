// 页面加载后运行
document.addEventListener('DOMContentLoaded', () => {
  console.log("页面已加载");

  // 订阅表单提交示例
  const form = document.getElementById('subscribe-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    alert(`感谢订阅，${email}！`);
    form.reset();
  });
});

// 平滑滚动到指定区块
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
