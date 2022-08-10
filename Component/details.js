const get= (req,res)=>{
    res.send([{
        "name":"Devendra kumar mali",
        "title":"ISRO: Satellites no longer usable as they were placed into wrong orbit",
        "img":"https://images.indianexpress.com/2022/08/ISRO-SSLV-launch-student-satellite-07082022-1.jpg?resize=450%2C250&w=475"
    },
    {
        "name":"Devendra kumar mali",
        "title":"After 16 years, India’s women’s team return to podium to win bronze",
        "img":"https://images.indianexpress.com/2022/08/WOmens-hockey.jpg?resize=450%2C250&w=210"
    },
    {
        "name":"Devendra kumar mali",
        "title":"Manipur After 'tense communal situation', mobile net shut for five days",
        "img":"https://images.indianexpress.com/2022/08/nodal-manipur-students-4col-1.jpg?resize=450%2C250&w=210"
    },
    {
        "name":"Devendra kumar mali",
        "title":"At $68.1 million valuation, the meteoric rise of 'Brand Alia Bhatt'",
        "img":"https://images.indianexpress.com/2022/08/alia-bhatt-brand-darlings.jpg?resize=450%2C250&w=210"
    },
    {
        "name":"Devendra kumar mali",
        "title":"Leher Kala writes: The power in the purse strings",
        "img":"https://images.indianexpress.com/2022/08/Opinion-5-3.jpg?resize=450%2C250&w=210"
    },
    {
        "name":"Devendra kumar mali",
        "title":"How the action spectacular RRR became a smash in America",
        "img":"https://images.indianexpress.com/2022/06/RRR-1200by667.jpg?resize=450%2C250&w=210"
    }
])
}
module.exports.apiController=get;