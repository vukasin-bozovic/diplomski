import BaseModel from './base.model';

describe('Base Model ', () => {

    let data;

    beforeEach(() => {
      data = {
        name: 'London',
        date: '2/4/84',
        weather: {
          temp: 38
        }
      }
    });


    it('should exist', () => {
        expect(BaseModel).toBeDefined();
    });

    it('should have static build method', () => {
        expect(BaseModel.build).toBeDefined();
    });

    it('static build method should return new instance', () => {
        expect(BaseModel.build(data) instanceof BaseModel).toBeTruthy();
    });

    it('should have static transform method', () => {
        expect(BaseModel.transform).toBeDefined();
    });

    it('static transform method should return instances of data parameter', () => {
        let key = 'weather';

        BaseModel.transform([data]);
        BaseModel.transform([data], key);
        BaseModel.transform(data);

        expect(BaseModel.transform(data, key) instanceof BaseModel).toBeTruthy();
    });
});
