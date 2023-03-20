let cars = [
'Tesla: model Y',
'Renault: Zoe',
]

console.log(cars);

cars.push(
    'Mustang: Mach-e'
)
cars.push(
    'Polester: polester 2'
)
console.log(cars);

cars.splice(1,1)

console.log(cars);

const sortmark = cars.sort()
console.log(sortmark);

cars.pop()
console.log(cars);