//SET UP RANDOM ACCENT COLOR
const setUpAccentColor = () => {
    const colorList = ['#64D3FF', '#FFBB80', '#3CE18E', '#FF8098', '#FFEE80', '#9D79EA'];
    const index = Math.floor(Math.random() * colorList.length);
    const documentRoot = document.documentElement;
    documentRoot.style.setProperty('--c-accent', colorList[index]);
};

export { setUpAccentColor };