export const dropdown = () => {
  const dropdowns = [...document.querySelectorAll('[data-dropdown]')];
  const style = `
        position:absolute;
        list-style:none;
        top:100%;
        min-width: 100%;
        width:max-content;
        max-height:0px;
        overflow:hidden;
        transition:.3s;
    `;
  dropdowns.forEach((a) => {
    const wrapper = document.createElement('div');
    a.parentElement.append(wrapper);
    wrapper.style = `
    position:relative;
    display:inline-block;
    `;
    const labelOptions = (() => {
      const obj = {};
      a.dataset.label.split(',').forEach((a) => {
        let arr = a.split(':');
        arr = arr.map((a) => {
          a = a.trim().replace(/['"]/g, '');
          return a;
        });
        obj[arr[0]] = arr[1];
      });
      obj.class = obj.class.split(' ');
      return obj;
    })();
    const label = document.createElement(labelOptions.tag);
    wrapper.append(label, a);
    label.textContent = labelOptions.text;
    label.classList.add('dropdown-label');
    if (labelOptions.class) label.classList.add(...labelOptions.class)
    label.style.display = 'inline-block';
    a.style = style;
    wrapper.addEventListener('mouseenter', () => {
      a.style.maxHeight = '100vh';
    })
    wrapper.addEventListener('mouseleave', () => {
      a.style.maxHeight = '0px'
    })
  });
};
