import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebAPIPostService } from './05-dependency-c';


// Main
(async () => {
    // Cannot find name 'LocalDataBaseService'. Did you mean 'JsonDatabaseService'?
    // Aplicar principio inversión de dependencias basadas en abastracciones
    // const provider = new LocalDataBaseService();
    // const provider = new LocalDataBaseService();
    // const provider = new JsonDatabaseService();
    const provider = new WebAPIPostService();
    
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();