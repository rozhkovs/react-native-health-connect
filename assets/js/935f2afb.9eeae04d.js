"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/react-native-health-connect/docs/intro","docId":"intro"},{"type":"link","label":"Get started","href":"/react-native-health-connect/docs/get-started","docId":"get-started"},{"type":"link","label":"Permissions","href":"/react-native-health-connect/docs/permissions","docId":"permissions"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/react-native-health-connect/docs/api/overview","docId":"api/overview"},{"type":"category","label":"Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"initialize","href":"/react-native-health-connect/docs/api/methods/initialize","docId":"api/methods/initialize"},{"type":"link","label":"getSdkStatus","href":"/react-native-health-connect/docs/api/methods/getSdkStatus","docId":"api/methods/getSdkStatus"},{"type":"link","label":"requestPermission","href":"/react-native-health-connect/docs/api/methods/requestPermission","docId":"api/methods/requestPermission"},{"type":"link","label":"getGrantedPermissions","href":"/react-native-health-connect/docs/api/methods/getGrantedPermissions","docId":"api/methods/getGrantedPermissions"},{"type":"link","label":"revokeAllPermissions","href":"/react-native-health-connect/docs/api/methods/revokeAllPermissions","docId":"api/methods/revokeAllPermissions"},{"type":"link","label":"insertRecords","href":"/react-native-health-connect/docs/api/methods/insertRecords","docId":"api/methods/insertRecords"},{"type":"link","label":"readRecords","href":"/react-native-health-connect/docs/api/methods/readRecords","docId":"api/methods/readRecords"},{"type":"link","label":"readRecord","href":"/react-native-health-connect/docs/api/methods/readRecord","docId":"api/methods/readRecord"},{"type":"link","label":"aggregateRecord","href":"/react-native-health-connect/docs/api/methods/aggregateRecord","docId":"api/methods/aggregateRecord"},{"type":"link","label":"aggregateGroupByDuration","href":"/react-native-health-connect/docs/api/methods/aggregateGroupByDuration","docId":"api/methods/aggregateGroupByDuration"},{"type":"link","label":"aggregateGroupByPeriod","href":"/react-native-health-connect/docs/api/methods/aggregateGroupByPeriod","docId":"api/methods/aggregateGroupByPeriod"},{"type":"link","label":"deleteRecordsByTimeRange","href":"/react-native-health-connect/docs/api/methods/deleteRecordsByTimeRange","docId":"api/methods/deleteRecordsByTimeRange"},{"type":"link","label":"deleteRecordsByUuids","href":"/react-native-health-connect/docs/api/methods/deleteRecordsByUuids","docId":"api/methods/deleteRecordsByUuids"},{"type":"link","label":"openHealthConnectSettings","href":"/react-native-health-connect/docs/api/methods/openHealthConnectSettings","docId":"api/methods/openHealthConnectSettings"},{"type":"link","label":"openHealthConnectDataManagement","href":"/react-native-health-connect/docs/api/methods/openHealthConnectDataManagement","docId":"api/methods/openHealthConnectDataManagement"},{"type":"link","label":"requestExerciseRoute","href":"/react-native-health-connect/docs/api/methods/requestExerciseRoute","docId":"api/methods/requestExerciseRoute"}],"href":"/react-native-health-connect/docs/category/methods"},{"type":"link","label":"Exceptions","href":"/react-native-health-connect/docs/api/exceptions","docId":"api/exceptions"}],"href":"/react-native-health-connect/docs/category/api-reference"},{"type":"link","label":"Contributing","href":"/react-native-health-connect/docs/contributing","docId":"contributing"},{"type":"link","label":"Troubleshooting","href":"/react-native-health-connect/docs/troubleshooting","docId":"troubleshooting"}]},"docs":{"api/exceptions":{"id":"api/exceptions","title":"Exceptions","description":"Exceptions","sidebar":"tutorialSidebar"},"api/methods/aggregateGroupByDuration":{"id":"api/methods/aggregateGroupByDuration","title":"aggregateGroupByDuration","description":"Reads aggregated group result by Duration according to requested read criteria. timeRangeSlicer needs to be specified for the Duration type (MILLIS\' | \'SECONDS\' | \'MINUTES\' | \'HOURS\' | \'DAYS) and length. Some record types do not support aggregation.","sidebar":"tutorialSidebar"},"api/methods/aggregateGroupByPeriod":{"id":"api/methods/aggregateGroupByPeriod","title":"aggregateGroupByPeriod","description":"Reads aggregated group result by Period according to requested read criteria. timeRangeSlicer needs to be specified for the Period type (\'DAYS\' | \'WEEKS\' | \'MONTHS\' | \'YEARS\') and length. Period is date-based amount of time as opposed to Duration, which is a fixed length of time. Some record types do not support aggregation.","sidebar":"tutorialSidebar"},"api/methods/aggregateRecord":{"id":"api/methods/aggregateRecord","title":"aggregateRecord","description":"Reads aggregated result according to requested read criteria, for e.g, data origin filter and within a time range. Some record types do not support aggregation.","sidebar":"tutorialSidebar"},"api/methods/deleteRecordsByTimeRange":{"id":"api/methods/deleteRecordsByTimeRange","title":"deleteRecordsByTimeRange","description":"Deletes one or more record by their identifiers. Deletion of multiple record is executed in single transaction - if one fails, none is deleted.","sidebar":"tutorialSidebar"},"api/methods/deleteRecordsByUuids":{"id":"api/methods/deleteRecordsByUuids","title":"deleteRecordsByUuids","description":"Deletes one or more Record by their identifiers. Deletion of multiple Record is executed in single transaction - if one fails, none is deleted.","sidebar":"tutorialSidebar"},"api/methods/getGrantedPermissions":{"id":"api/methods/getGrantedPermissions","title":"getGrantedPermissions","description":"Returns a set of all health permissions granted by the user to the calling provider app.","sidebar":"tutorialSidebar"},"api/methods/getSdkStatus":{"id":"api/methods/getSdkStatus","title":"getSdkStatus","description":"Determines whether an implementation of HealthConnectClient is available on the device at the moment. If none is available, apps may choose to redirect to package installers to find suitable providers. If providerPackageName is not provided, the default Health Connect application package name will be considered com.google.android.apps.healthdata.","sidebar":"tutorialSidebar"},"api/methods/initialize":{"id":"api/methods/initialize","title":"initialize","description":"Initializes the health connect client with specific providers. If providerPackageName is not provided, the default Health Connect application package name will be considered com.google.android.apps.healthdata.","sidebar":"tutorialSidebar"},"api/methods/insertRecords":{"id":"api/methods/insertRecords","title":"insertRecords","description":"Inserts one or more record and returns newly generated records\' uuids. Insertion of multiple records is executed in a transaction - if one fails, none is inserted.","sidebar":"tutorialSidebar"},"api/methods/openHealthConnectDataManagement":{"id":"api/methods/openHealthConnectDataManagement","title":"openHealthConnectDataManagement","description":"Opens Health Connect data management screen","sidebar":"tutorialSidebar"},"api/methods/openHealthConnectSettings":{"id":"api/methods/openHealthConnectSettings","title":"openHealthConnectSettings","description":"Opens Health Connect app\'s settings.","sidebar":"tutorialSidebar"},"api/methods/readRecord":{"id":"api/methods/readRecord","title":"readRecord","description":"Retrieves a single record of the specified type.","sidebar":"tutorialSidebar"},"api/methods/readRecords":{"id":"api/methods/readRecords","title":"readRecords","description":"Retrieves a collection of records.","sidebar":"tutorialSidebar"},"api/methods/requestExerciseRoute":{"id":"api/methods/requestExerciseRoute","title":"requestExerciseRoute","description":"Health Connect requires users\' permission to access routes for exercise records (see Android docs). When exercise records are fetched, they will include an exerciseRoute field with a type (and possibly a route). This method should be called to request permissions to fetch the route if the type is ExerciseRouteResultType.CONSENT_REQUIRED.","sidebar":"tutorialSidebar"},"api/methods/requestPermission":{"id":"api/methods/requestPermission","title":"requestPermission","description":"Request permission for specified record types and access types.","sidebar":"tutorialSidebar"},"api/methods/revokeAllPermissions":{"id":"api/methods/revokeAllPermissions","title":"revokeAllPermissions","description":"Revokes all previously granted permissions by the user to the calling app.","sidebar":"tutorialSidebar"},"api/overview":{"id":"api/overview","title":"Overview","description":"Available methods","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"Contributions are always welcome, no matter how large or small!","sidebar":"tutorialSidebar"},"get-started":{"id":"get-started","title":"Get started","description":"Requirements","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"React Native Health Connect","sidebar":"tutorialSidebar"},"permissions":{"id":"permissions","title":"Permissions","description":"Setting up permissions in React Native CLI template","sidebar":"tutorialSidebar"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Troubleshooting page","sidebar":"tutorialSidebar"}}}')}}]);