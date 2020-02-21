
export const CREATE_MODULE = "CREATE_MODULE"
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const DELETE_MODULE = "DELETE_MODULE"
export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const UPDATE_MODULE = "UPDATE_MODULE";
export const updateModule = (module) => ({
    type: UPDATE_MODULE,
    newModule: module
})

export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const findAllModulesForCourse = (courseId) => ({
    type: FIND_MODULES_FOR_COURSE,
    courseId: courseId
})


export const FIND_ALL_MODULES = "FIND_ALL_MODULES";