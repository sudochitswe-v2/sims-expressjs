const createStamp = (model) => {
    return {
        ...model,
        CreatedAt: new Date().toISOString(),
    }
}
const updateStamp = (model) => {
    const { CreatedAt } = model;
    return {
        ...model,
        ModifiedAt: new Date().toISOString(),
        CreatedAt: CreatedAt.toISOString(),
    }
}
const makeIsDeleted = (model) => {
    const { CreatedAt } = model;
    return {
        ...model,
        ModifiedAt: new Date().toISOString(),
        CreatedAt: CreatedAt.toISOString(),
        IsDeleted: true,
        IsActive: false
    }
}
export { createStamp, updateStamp, makeIsDeleted }