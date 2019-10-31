const typeDefs = `
    enum ENUMStatus {
        Active
        Inactive
    }

    type Query{
        employees(id:String) : [Employee!]!
        clients(id:String) : [Client!]!
        notes(id:String) : [Note!]!
        products(id:String) : [Product]!
        orders(id:String) : [Order!]!
        providers(id:String) : [Provider!]!
    }
    type Employee{
        id : ID!
        name : String!
        lastName : String!
        address: String!
        typeEmployee : TypeEmployee!
        schedule : Schedule!
        startDate : String!
        status : ENUMStatus!
        paid : Float!
        endDate : String!
    }


    type TypeEmployee{
        id : ID!
        job : String!
        description : String!
    }

    type Schedule{
        id : ID!
        startTime : String!
        endTime : String!
    }

    type Client{
        id : ID!
        name : String!
        lastName : String!
        address : String!
        telephone : String!
        creditAvailable : Float!
        creditUsed : Float!
    }

    type Note{
        id : ID!
        date : String!
        client : Client!
        employee : Employee!
    } 

    type NoteContain{
        id : ID!
        quantity : Int!
        type : Unit!
        product : Product!
    }

    type Product{
        id : ID!
        name : String!
        description : String!
        onStock : Int!
    }

    type Unit{
        id : ID!
        name : String!
    }

    type Cost{
        id:ID!
        value:Float
        date:String!
        product : Product!
    }

    type Price{
        id : ID!
        value : Float!
        date : String!
        product : Product!
    }

    type Order{
        id : ID!
        provider : Provider!
        creationDate : String!
        arriveDate : String
    }

    type OrderContain{
        id : ID!
        product : Product!
        order : Order!
        quantity : Int!
    }

    type Provider{
        id : ID!
        name : String!
        telephone : String!
    }
`;
export { typeDefs };
