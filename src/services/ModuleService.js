export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module)
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module)
    }).then(response => response.json())

export const findModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/modules/${moduleId}`)
        .then(response => response.json())

export default {
    deleteModule,
    findModuleForCourse,
    createModule,
    updateModule,
    findModule
}
