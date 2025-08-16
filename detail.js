function addtolocal(ridename,rideimg)
{
 var details = {
    "ridename":ridename,
     "rideimg":rideimg
 }
 localStorage.setItem('mykey',JSON.stringify(details))
 window.location.href="details.html"
}