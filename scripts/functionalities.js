const allSeats = document.getElementsByClassName('seat-click')
for (const seatClick of allSeats) {
    seatClick.addEventListener("click", function (event) {
        const seatClicked = event.target.parentNode.childNodes[0].innerText

        const selectedSeats = document.getElementById('selected-seats')


  

        // seat count
        
        const seatCounts = getConvertedValue('remaining-seats')
        if(seatCounts < 37){
            alert('One can not buy more than 4 tickets at a time')
            return
        }
        const seatCount = getConvertedValue('remaining-seats')
        document.getElementById('remaining-seats').innerText = seatCount - 1
        const div = document.createElement('div')

        const p1 = document.createElement('p')


        p1.innerText = seatClicked

        div.appendChild(p1)
        selectedSeats.appendChild(div)
        updateTotalCost(550)
        updateGrandTotal()
    })
}



function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost')
    if(status == undefined){
        document.getElementById('grand-total-cost').innerText = totalCost

    }
    else{
        const couponCode = document.getElementById('inserted-coupon').value
        if(couponCode == 'NEW15'){
            const discount = totalCost * 0.15
         
            document.getElementById('grand-total-cost').innerText = totalCost - discount;
        }
        else if(couponCode == 'COUPLE20'){
            const discount = totalCost * 0.20
         
            document.getElementById('grand-total-cost').innerText = totalCost - discount;
        }
        else{
            alert("Please insert a valid Coupon Code")
        }
    }

}

function updateTotalCost(value) {

    const totalCost = getConvertedValue('total-cost')
    const convertedPrice = value
    const sum =totalCost + convertedPrice
    document.getElementById('total-cost').innerText = sum

}

function getConvertedValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

