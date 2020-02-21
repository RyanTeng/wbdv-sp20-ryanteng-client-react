export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic)
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic)
    }).then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${topicId}`)
        .then(response => response.json())

export default {
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic,
    findTopic
}
