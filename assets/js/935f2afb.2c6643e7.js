"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"What is DynamoDB Toolbox?","href":"/docs/","docId":"introduction/what-is-dynamodb-toolbox"},{"type":"link","label":"Features","href":"#features"},{"type":"link","label":"Quick Start","href":"/docs/introduction/quick-start","docId":"introduction/quick-start"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Table Reference","items":[{"type":"link","label":"Overview","href":"/docs/table/","docId":"table/index"},{"type":"link","label":"Properties","href":"/docs/table/properties","docId":"table/properties"},{"type":"link","label":"Methods","href":"/docs/table/methods","docId":"table/methods"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Entity Reference","items":[{"type":"link","label":"Overview","href":"/docs/entity/","docId":"entity/index"},{"type":"link","label":"Properties","href":"/docs/entity/properties","docId":"entity/properties"},{"type":"link","label":"Methods","href":"/docs/entity/methods","docId":"entity/methods"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Filters & Conditions","href":"/docs/filters-and-conditions/","docId":"filters-and-conditions/index"},{"type":"link","label":"Projection Expressions","href":"/docs/projection-expressions/","docId":"projection-expressions/index"},{"type":"link","label":"Custom Parameters & Clauses","href":"/docs/custom-parameters/","docId":"custom-parameters/index"},{"type":"link","label":"Type Inference","href":"/docs/type-inference/","docId":"type-inference/index"},{"type":"link","label":"Contributing","href":"/docs/contributing/","docId":"contributing/index"},{"type":"link","label":"GitHub","href":"https://github.com/jeremydaly/dynamodb-toolbox"}]},"docs":{"contributing/index":{"id":"contributing/index","title":"Contributions and Feedback","description":"npm","sidebar":"docsSidebar"},"custom-parameters/index":{"id":"custom-parameters/index","title":"Adding Custom Parameters and Clauses","description":"This library supports all API options for the available API methods, so it is unnecessary for you to provide additional parameters. However, if you would like to pass custom parameters, simply pass them in an object as the last parameter to any appropriate method.","sidebar":"docsSidebar"},"entity/index":{"id":"entity/index","title":"Entity","description":"An Entity represent a well-defined schema for a DynamoDB item. An Entity can represent things like a User, an Order, an Invoice Line Item, a Configuration Object, or whatever else you want. Each Entity defined with the DynamoDB Toolbox must be attached to a Table. An Entity defines its own attributes, but can share these attributes with other entities on the same table (either explicitly or coincidentally). Entities must flag an attribute as a partitionKey and if enabled on the table, a sortKey as well.","sidebar":"docsSidebar"},"entity/methods":{"id":"entity/methods","title":"Entity Methods","description":"attribute","sidebar":"docsSidebar"},"entity/properties":{"id":"entity/properties","title":"Entity Properties","description":"The following properties are available on instances of the Entity Class. Certain properties can be changed by directly setting the property value. See below for a list of properties and their descriptions.","sidebar":"docsSidebar"},"filters-and-conditions/index":{"id":"filters-and-conditions/index","title":"Filters and Conditions","description":"DynamoDB supports Filter and Condition expressions. Filter Expressions are used to limit data returned by query and scan operations. Condition Expressions are used for data manipulation operations (put, update, delete and batchWrite), allowing you to specify a condition to determine which items should be modified.","sidebar":"docsSidebar"},"introduction/quick-start":{"id":"introduction/quick-start","title":"Quick Start","description":"We\'re using aws-sdk v2 DynamoDB tools, the support for aws-sdk v3 is on its way.","sidebar":"docsSidebar"},"introduction/what-is-dynamodb-toolbox":{"id":"introduction/what-is-dynamodb-toolbox","title":"What is DynamoDB Toolbox?","description":"DynamoDB Toolbox is a set of tools that makes it easy to work with Amazon DynamoDB and the DocumentClient. It\'s designed with Single Tables in mind, but works just as well with multiple tables. It lets you define your Entities (with typings and aliases) and map them to your DynamoDB tables. You can then generate the API parameters to put, get, delete, update, query, scan, batchGet, and batchWrite data by passing in JavaScript objects. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex UpdateExpressions for you. \ud83d\ude09","sidebar":"docsSidebar"},"projection-expressions/index":{"id":"projection-expressions/index","title":"Projection Expressions","description":"DynamoDB supports Projection Expressions that allow you to selectively return attributes when using the get, query or scan operations.","sidebar":"docsSidebar"},"table/index":{"id":"table/index","title":"Table","description":"A Table represents a one-to-one mappings to your DynamoDB table. They contain information about your table\'s name, primary keys, indexes, and more. They are also used to organize and coordinate operations between entities. Tables support a number of methods that allow you to interact with your entities including performing queries, scans, batch gets and batch writes.","sidebar":"docsSidebar"},"table/methods":{"id":"table/methods","title":"Table Methods","description":"query","sidebar":"docsSidebar"},"table/properties":{"id":"table/properties","title":"Table Properties","description":"The following properties are available on instances of the Table Class. Properties can be changed by directly setting the property value:","sidebar":"docsSidebar"},"type-inference/index":{"id":"type-inference/index","title":"Type Inference","description":"Since the v0.4, most Entity methods types are inferred from an Entity definition. This is still experimental and may change in the future.","sidebar":"docsSidebar"}}}')}}]);