browser.runtime.onStartup.addListener(async ()=>{
    let list = await browser.tabs.query({url:"https://habitica.com/"});
    if(list.length === 0){
        browser.tabs.create({active:true, url:"https://habitica.com/"});
    }
});