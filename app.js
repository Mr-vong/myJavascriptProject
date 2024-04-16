async function fetchMenu(){
  const response  = await fetch('./menu.json');
  const menus = await response.json();
  console.log(menus);
}

const menu = 