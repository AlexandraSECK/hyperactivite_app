/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    signup: (req,res) =>{
        var nom = req.body.nom ;
        var prenom = req.body.prenom ;
        var fonction = req.body.fonction;
        var email = req.body.email ;
        var password = req.body.password ;
      User.create({nom:nom, prenom:prenom, fonction:fonction, email:email, password:password})
      .then(response=>{
        return res.status(201).json({ 'res': 'ok' });
      })
      .catch(err => {
        return res.status(500).json({ 'error': err });
    });
  },

  login : (req,res)=>{
      var email = req.body.email;
      var password = req.body.password;
      User.findOne({email:email, password:password})
      .then(response=>{
        return res.status(201).json({ 'res': "ok" });
      })
      .catch(err => {
        return res.status(500).json({ 'error': err });
    });
  }

};

