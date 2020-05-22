const router = require("express")();
const userCreate = require('../middlewares/userCreateMiddleware');
const userAuth = require('../middlewares/userAuth');
const userControls = require('../controllers/userControls');

router.post('/create',[userCreate], (req, res) => {
    userControls.createUser(req.user)
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.get('/checkSubmitted',[userAuth], (req, res) => {
    userControls.checkIfTaskSubmitted(
        req.body.uid
    )
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.post('/generateProblem',[userAuth], (req, res) => { //[userAuth],
    userControls.createProblemStatement(
        req.body.uid,
        req.body.isLock1,
        req.body.isLock2,
        req.body.isLock3
    )
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.post('/lockProblem',[userAuth], (req, res) => {
    userControls.lockProblem(
        req.body.uid,
        req.body.value1,
        req.body.value2,
        req.body.value3
    )
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.post('/submitLink',[userAuth], (req, res) => {
    userControls.submitLink(
        req.body.uid,
        req.body.link
    )
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.get('/countSubmittedTasks', (req, res) => {
    userControls.countSubmits()
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.get('/listAllUsers', (req, res) => {
    userControls.listAllUsers()
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.get('/listDetails', (req, res) => {
    userControls.getEmailAndTasks()
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

router.get('/getParticipantsNotSubmitted', (req, res) => {
    userControls.getParticipantsNotSubmitted()
        .then(resp => res.status(200).send(resp))
        .catch(err => res.status(400).send(err))
})

module.exports = router;

//push new build
