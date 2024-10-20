export const apiDeleteData=(id:any)=>fetch(`http://localhost:3000/zgloszenia/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
      } else {
        throw new Error("Bląd podczas usuwania zgłoszenia");
      }
    })
    .catch(err=>console.log(err))