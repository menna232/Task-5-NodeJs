
    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "Task_5"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')
        const db = res1.db(dbname)
        //////////////////////////////////////////////////////////////
        // insertMany 10   5 of them have the same age 27 y
        // db.collection ('users').insertMany(
        // [ {
        //         name: 'maram',
        //         age: 20
        //     },
        //     {
        //         name: 'merna',
        //         age: 30
        //     },
        //     {
        //         name: 'samaa',
        //         age: 27
        //     },
        //     {
        //         name: 'doaa',
        //         age: 27
        //     },
        //     {
        //         name: 'asmaa',
        //         age: 27
        //     },
        //     {
        //         name: 'ahmed',
        //         age: 24
        //     },
        //     {
        //         name: 'mahmoud',
        //         age: 24
        //     },
        //     {
        //         name: 'mohamed',
        //         age: 24
        //     },{
        //         name :'israa',
        //         age :27
        //     },
        //     {
        //         name: 'hana',
        //         age: 27
        //     }] , (error,data)=>{
        //         if(error){
        //             console.log('Unable to insert data')
        //         }
        //         // console.log(data.insertedCount)
        //     } 
        // )
        //  find   match  27 y  
        db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })
       //limit first 3    27y 
    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })

    //set the name of the firt 4 documents 
    // Find the first 4 documents and store them in var then loop on it and set the name property
    db.collection('users').find().limit(4).toArray(function(err, documents) {
    if (err) {
        console.error('Error finding documents:', err);
        return;
    }
    
    documents.forEach(element => {
        db.collection('users').updateOne(
            {_id:element._id},
            {$set:{name:'ali'}
        ,$inc:{age: 1}}
            )
    });
    });
    
    
    //update 1 
    db.collection("users").updateOne({_id:mongodb.ObjectId("65fc891c67e4f2ab1bae76d0")},{
        $inc: {age: 20}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})
    /////////////////////////////////////////////////////////////////////
    // udate many 
    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})
    
    /////////////////////////////////////////////////////////////////////
    // delete many 
        db.collection('users').deleteMany({age:24})
        .then((data1)=>{console.log(data1.deletedCount)})
    .catch((error)=> {console.log(error)})
    
})




