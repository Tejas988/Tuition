const url = 'https://tuitionapp13.herokuapp.com';
export const createUser = async (email) => {
  await fetch(`${url}/user/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      name: '',
      qualification: '',
      location: '',
      phone: '',
    }),
  })
    .then((response) => {
      console.log(response.json());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createBatch = async (batch)=>
{ 
  batch.userId="5ff5ff895373573eecd7bbfd";
  
  console.log(batch,"IN HERE");
    try {
       let createdBatch= await fetch(`${url}/tutor/create_batch`,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(batch),
        })
        console.log(createdBatch);
    } catch (error) {
        console.log(error,"CREATE BATCH ERROR");    
      }
}

export const getSearchResult = async(std,subject)=>{

  console.log(std,subject,"IN HERE");
  try {       
     let batches= await fetch(`${url}/student/search_batches?std=${std}&subject=${subject}`,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      return await batches.json();
  } catch (error) {
      console.log(error,"SEARCH BATCH ERROR");    
    }
}