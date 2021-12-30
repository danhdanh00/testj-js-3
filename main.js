const getEl = (element) => document.querySelector(element);

let listReminder = [];

const sumbitTask = () => {
    let textValue = getEl("#text").value.trim();
    let dateValue = getEl("#date").value;
    console.log(textValue,dateValue);
    if (!textValue) {
        alert("Vui lòng nhập việc cần làm")
        return;
    }
    
    if(!dateValue){
        alert('vui lòng nhập ngày');
        return;
    }
    const year = parseInt(dateValue.substring(0, 4));
    const month = parseInt(dateValue.substring(5, 7));
    const day = parseInt(dateValue.substring(8, 10));

    const today = new Date();
    console.log(today);

    if (today.getFullYear() > year) return alert('Năm phải lớn hơn hoặc bằng Năm hiện tại');
    if (today.getMonth() + 1 > month) return alert('Tháng phải lớn hơn hoặc bằng tháng hiện tại');
    if (today.getDate() > day) return alert('Ngày phải lớn hơn hoặc bằng ngày hôm nay');

    console.log(textValue, dateValue,);
    let listReminder = localStorage.getItem('listReminder') ? JSON.parse(localStorage.getItem('listReminder')) : [];
    listReminder = [...listReminder, { textValue, dateValue,}];
    localStorage.setItem('listReminder', JSON.stringify(listReminder));

    displayTask();
    // deleteReminder();
    displayClear();
};
const displayTask = () => {

    let listReminder = localStorage.getItem('listReminder') ? JSON.parse(localStorage.getItem('listReminder')) : [];

    if (listReminder === listReminder.lenght) return false

    let tableReminder = '';
    for (const task of listReminder) {
        listReminder =  `<button onclick 'deleteReminder(${task},'>X</button><div id="listReminder"> 
        Nội dung: ${task.textValue}<br> Ngày nhắc: ${task.dateValue}</div>`;
        tableReminder = tableReminder + listReminder;
    }
    getEl("#resultReminder").innerHTML = tableReminder;
}

// const deleteReminder = (index)=>{
//     console.log(deleteReminder);
//     // let listReminder = localStorage.getItem('listReminder') ? JSON.parse(localStorage.getItem('listReminder')) : [];
//     // if(confirm('Bạn có muốn xóa không?')) {
//     //     listReminder.splice(index,1);
//     // }
//     // localStorage.setItem('listReminder', JSON.stringify(listReminder));
//     // displayTask(index);
// }

const displayClear = () =>{
    getEl("#text").value = '';
    getEl("#saveDate").value = '';
}
getEl("#submit").onclick = sumbitTask;






