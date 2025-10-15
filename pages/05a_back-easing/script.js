import gsap from "gsap";

const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelectorAll('.indicator');
const tabRow = document.querySelector('.tab-row');

const updateIndicator = (target) => {
    // Get the position and size info of the clicked tab relative to viewport (in px)
    const tabBounds = target.getBoundingClientRect();
    // Get the position and size info of the tab container relative to viewport (in px)
    const rowBounds = tabRow.getBoundingClientRect();

    // Get the width of the clicked tab to set indicator width (in px)
    const width = tabBounds.width;
    // Calculate the distance from left edge of container to left edge of clicked tab (in px)
    const offset = tabBounds.left - rowBounds.left;

    gsap.to(indicator, {
        x: offset,
        width: width,
        duration: 0.4,
        ease: "back.out(1.7)"
    })
}   

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        updateIndicator(tab);
    })
})

updateIndicator(document.querySelector('.tab.active'));