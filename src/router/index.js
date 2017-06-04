import Router from './Router'

export function createRouter() {

    const router = new Router()

    router
        .on('/action/create', createDocument)
        .on('/document/:fileId', loadDocument, gotoDefaultPage)
        .on('/document/:fileId/page/:pageName', loadDocument, gotoPage)
        .start()

    return router

    function createDocument(context) {
        let { folderId, userId } = context.query
        console.log(`creating document folderId=${folderId} userId=${userId}`)
        //
        //dispatch({ type: 'CREATE_DOCUMENT', folderId, userId })
    }

    function loadDocument(context, next) {
        let { fileId } = context.params
        console.log(`ensuring that file has id '${fileId}'...`)
        
        next() 
    }

    function gotoDefaultPage(context) {
        console.log('going to default page')
    }

    function gotoPage(context) {
        let { pageName } = context.params
        console.log(`going to page '${pageName}'`)
    }
}
