export const findWidgetsForTopic = (TopicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${TopicId}/widgets`)
        .then(response => response.json())

export const createWidget = (TopicId, widget) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${TopicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget)
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget)
    }).then(response => response.json())

export const findWidget = (widgetId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/topics/${widgetId}`)
        .then(response => response.json())

export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    findWidget
}
