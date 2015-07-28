#!/usr/bin/env bash
# This script can be used to run PHP unittests
# Test databse and test config.xml have to be created before running tests. This is a one time setup.
#   1 - create a LorisTest DB from the default schema (lori/SQL/0000-00-00-schema.sql)
#   2 - create a MySQL user SQLTestUser with password TestPassword & specify the password in the mysql commands (with option -p) below
#   3 - Create a config.xml file in loris/test/ folder.
#       Changes to make in this config.xml file:
#       *  Database connection credentials: specify credentials to LorisTest DB which you create in step 1
#       *  Set sandbox mode to 1: <sandbox>1</sandbox>
#       *  Set SyncAccounts to false: <SyncAccounts>false</SyncAccounts>

# set environment variable LORIS_DB_CONFIG to test config.xml file
export LORIS_DB_CONFIG=$(pwd)/config.xml

# run unit tests
../vendor/bin/phpunit --debug --configuration phpunit.xml --testsuite 'LorisUnitTests for php/libraries'
