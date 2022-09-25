export const dropdown = () => {
  const dropdowns = [...document.querySelectorAll('[data-dropdown]')];
  const style = `
        position:absolute;
        list-style:none;
        top:100%;
        width: 100%;
        border:solid 1px green;
    `;
  dropdowns.forEach((a) => {
    const wrapper = document.createElement('div');
    a.parentElement.append(wrapper);
    const label = document.createElement('span');
    wrapper.append(label, a);
    wrapper.style = `
        position:relative;
        display:inline-block;
        border:solid 1px red
        `;
    const labelInfo = (() => {
      const obj = {};
      const items = a.dataset.label.split(',').map((a) => {
        
        a = a.trim();
      });
      console.log(items);
    })();
    label.textContent = a.dataset.dropdown;
    a.parentElement.insertBefore(label, a);
    label.classList.add('dropdown-label');
    label.style.display = 'inline-block';
    a.style = style;
  });
};
