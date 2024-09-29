function toggleContent(titleId, contentId) {
    const title = document.getElementById(titleId);
    const content = document.getElementById(contentId);

    title.addEventListener('click', () => {
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';
    });
  }

  toggleContent('title1', 'content1');
  toggleContent('title2', 'content2');
  toggleContent('title3', 'content3');