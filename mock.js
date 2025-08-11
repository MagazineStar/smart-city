const mockjs = require('mockjs')
const wuhan_buildings = require('./GIS_DATA/Wuhan_Buildings.json')
const wuhan_roads = require('./GIS_DATA/Wuhan_roads.json')
const wuhan_events = require('./GIS_DATA/Wuhan_events.json')

module.exports = () => {
    return mockjs.mock({
        wuhan_buildings,
        wuhan_roads,
        wuhan_events
    })
}