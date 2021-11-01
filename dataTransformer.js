const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [
{ userId: 'U01', orderIds: ['T01', 'T02'] },
{ userId: 'U02', orderIds: [] },
{ userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
'T01': { name: 'A', price: 499 },
'T02': { name: 'B', price: 599 },
'T03': { name: 'C', price: 699 },
'T04': { name: 'D', price: 799 },
}


let result = []

userIds.forEach(userId => {
    let userInfo = {}
    const userOrderId = userOrders.filter(order => {
        return order.userId ===  userId
    })[0].orderIds

    let orders = []
    userOrderId.forEach(itemId => {
        const userOrder =  orderData[itemId]
        let orderInfo = {id:itemId, ...userOrder }

        orders.push(orderInfo)
    })

    userInfo.user = { id: userId, name: userData[userId] }
    userInfo.orders = orders

    result.push(userInfo)
});


//demo
console.log('Output data after transformations:')
console.table( result )

console.log('\nresult detail:')
for (let i = 0; i < result.length; i++){
    console.log(result[i])
}