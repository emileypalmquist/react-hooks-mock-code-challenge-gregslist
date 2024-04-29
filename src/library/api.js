export function deleteListing(id, onSuccess) {
    // fetch request to delete listing
    return fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE'
    }).then((resp) => {
        if (resp.ok) {
          // filter and update state of listings to remove from the dom
          onSuccess(id)
        } else {
          console.log('handle errors')
        }
      })
}