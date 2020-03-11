import { API_URL } from "../constants/app-constants";

export const findWidgetsForTopic = (TopicId) =>
    fetch(`${API_URL}/topics/${TopicId}/widgets`)
        .then(response => response.json())

export const createWidget = (TopicId, widget) =>
    fetch(`${API_URL}/topics/${TopicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget)
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${API_URL}/topics/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${API_URL}/topics/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget)
    }).then(response => response.json())

export const findWidget = (widgetId) =>
    fetch(`${API_URL}/topics/${widgetId}`)
        .then(response => response.json())

export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    findWidget
}