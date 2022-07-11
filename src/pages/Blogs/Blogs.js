import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const myBlogs=[
        {
            'id':1,
            'title':'Javascript Vs NodeJs',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbgckHPBKAC7q8UXa5R3U0NIcbHZxhThM6Q&usqp=CAU',
            'description':{
                "part_1":"JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has and that uses the concept of Oops but it is based on prototype inheritance. Javascript mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.",
                "part_2":'Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.'
            },
            "difference": true
        },
        {
            'id':2,
            'title':'Sql Vs NoSql',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtn0kbxUtG7ytVMVsxPg605_b2rTLc3tKxRA&usqp=CAU',
            'description':{
                'part_1':'SQL databases use structured query language and have a predefined schema. SQL, which stands for “Structured Query Language,” is the programming language that been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication. SQL is still widely used for querying relational databases, where data is stored in rows and tables that are linked in various ways. One table record may link to one other or to many others, or many table records may be related to many records in another table.',
                'part_2':'NoSQL databases are document, key-value, graph, or wide-column stores. NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. NoSQL databases have dynamic schemas for unstructured data.'
            },
            "difference": true
        },
        {
            'id':3,
            'title':'About JWT',
            'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ywZiQg-uEj7UTo67aGSltwOwCuLfMXixfw&usqp=CAU',
            'description':'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.',
            "difference": false
        }
    ]
    return (
        <div>
            <h2 className='text-center text-decoration-underline'>Blog</h2>
            {
                myBlogs.map(blog=><Blog key={blog.id} blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;