export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const createLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/modules/${lessonId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson)
    }).then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson)
    }).then(response => response.json())

export const findLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/lessons/${lessonId}`)
        .then(response => response.json())

export default {
    deleteLesson,
    findLessonsForModule,
    createLesson,
    updateLesson,
    findLesson
}
