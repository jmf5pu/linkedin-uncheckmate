const uncheckCheckbox = () => {
    const checkboxElement = document.getElementById("follow-company-checkbox");
    if(checkboxElement){
        checkboxElement.checked = false;
    }
};

const pageObserver = new MutationObserver(uncheckCheckbox);
const pageObserverConfig = {subtree: true, childList: true, attributes: true};

pageObserver.observe(document.body, pageObserverConfig);