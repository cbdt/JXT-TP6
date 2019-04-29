const { Status, Category } = require('./models/alert')


Status.deleteMany({}, (err) => { 
  if (err !== null) {
    console.log(err)
  }
})

Category.deleteMany({}, (err) => { 
  if (err !== null) {
    console.log(err)
  }
})

/*

new Status({ name: 'warning'}).save()
new Status({ name: 'threat'}).save()
new Status({ name: 'danger'}).save()
new Status({ name: 'risk'}).save()



new Category({ name: 'weather'}).save()
new Category({ name: 'sea'}).save()
new Category({ name: 'transport'}).save()*/
