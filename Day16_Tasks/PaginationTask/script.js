
let url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
let tabledata = document.getElementById('tableContainer')
getData()
async function getData() {
    let data = await fetch(url)
    let allData = await data.json()
    console.log(allData)
   for(var i=0;i<5;i++){
        let table1 = document.createElement('tbody')

        table1.innerHTML = `<tr>
      <th scope="row">${allData[i].id}</th>
      <td>${allData[i].name}</td>
      <td>${allData[i].email}</td>
    </tr>
  </tbody>`
        tabledata.append(table1)
   }

}
