class BaseModel {

    static transform(data, key) {
        if (Array.isArray(data)) {
            return data
                .map((item) => {
                    const model = !key ? item : item[key];
                    return this.build(model);
                })
                .filter(Boolean);
        }
        return this.build(data);
    }

    static build(data) {
        return new this(data);
    }
}

export default BaseModel;