const typeDef = `
    type Query{
        employees : [Employee!]!
        clients : [Client!]!
        notes : [Note!]!
        products : [Product]!
        orders : [Order!]!
        providers : [Provider!]!
    }
    type Employee{
        id : ID!
        name : String!
        lastName : String!
        address: String!
        typeEmployee : TypeEmployee!
        schedule : Schedule!
        startDate : Date!
        status : Enum!
        paid : Float!
        endDate : Date!
    }


    type TypeEmployee{
        id : ID!
        job : String!
        description : String!
    }

    type Schedule{
        id : ID!
        startTime : Date!
        endTime : Date!
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
        date : Date!
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
        date:Date!
        product : Product!
    }

    type Price{
        id : ID!
        value : Float!
        date : Date!
        product : Product!
    }

    type Order{
        id : ID!
        provider : Provider!
        creationDate : Date!
        arriveDate : Date
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
