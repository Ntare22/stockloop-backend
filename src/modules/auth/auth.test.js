import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';


const {
    expect
} = chai;
chai.use(chaiHttp);

describe('Testing Login Endpoint ', () => {
    it('should return a that user has successfully logged in', (done) => {
        chai.request(app)
            .post('/login')
            .send({
                email: 'example@example.com',
                password: 'safdage'
            })
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal('User is successfully logged in');
                done();
            });
    });

    it('should return a that user has successfully logged in', (done) => {
        chai.request(app)
            .post('/login')
            .send({
                email: 'example@example.com',
                password: 'sadafdage'
            })
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(401);
                expect(res.body.message).to.equal('Incorrect email or password');
                done();
            });
    });
});
