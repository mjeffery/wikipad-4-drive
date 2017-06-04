function create(gapi) {

    return function initNewModel(model) {
        const root = model.getRoot()
        const pages = model.createMap()

        const wikiIndex = model.create(WikiPage, '# Untitled Wiki\n')

        root.set('version', '0.0.1')
        root.set('defaultPage', 'WikiIndex')
        root.set('pages', pages)

        pages.set('WikiIndex', wikiIndex)
    }

}

export default { create }
