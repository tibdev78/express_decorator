export interface RouteDefinition {
    path: string;
    method: 'get'| 'post'| 'put' | 'delete' ;
    methodName: string,
    middlewares?: any[],
}