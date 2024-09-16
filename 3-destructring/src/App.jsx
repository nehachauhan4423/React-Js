function App() {
  // destructuring
  // const arr = [10,56,7];
  // const [m,n,p] = arr;
  // console.log(m,n,p);


  let address = {
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    pincode: 20567985,
  }

  // TWO OBJECT JOINT 
  // let obj = {
  //   name: 'Neha',
  //   age: 17,
  //   arr: [10, 6, 4, 2],
  //   state: [
  //     { name: 'PUNE', value: '1' },
  //     { name: 'DELHI', value: '2' },
  //     { name: 'KERALA', value: '3' },
  //     { name: 'MUMBAI', value: '4' },
  //     { name: 'CHENNAI', value: '5' },
  //   ]
  // }


  let obj = {
    record: [
      { name: 'NEHA', Std: 'DIPLOMA', city: 'SURAT', pincode: '30243854' },
      { name: 'JANAVI', Std: 'BSC', city: 'PUNE', pincode: '28763464' },
      { name: 'BANSI', Std: 'BBA', city: 'BHAVANAGAR', pincode: '74621637' },
      { name: 'HETVI', Std: 'BCA', city: 'GANDHINAGAR', pincode: '96426713' },
      { name: 'KHUSHI', Std: '12TH', city: 'AHEMDABAD', pincode: '52345185' },
    ]
  }


  console.log(obj);
  return (
    <div>
      {
        obj.record.map((record, index) => {
          return (
            <div align="center">
                <h3>NAME :-   {record.name}</h3>
                <h5>COURSE:-{record.Std}</h5>
                <h5>CITY:-{record.city}</h5>
                <h5>PINCODE:{record.pincode}</h5>
            </div>
          )
        })
      }
    </div>
  )
}

export default App