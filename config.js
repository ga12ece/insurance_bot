'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'ST2YXRRSW54SM75D3IDV2OPO6HVUABAB'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAANYHalkTTgBAIdBfOINKRMfgIsdSubuJjKZBu0p91e2PbV36PwTZBwyXx6K5ZAtpz2AJi4VatPqJX0Qz4NH7e3ncRNUqGhfXEBzZCGyBxd3hJLk7DWIOHtZB5PoPUA1US1SNc1MK0HipFSg2uYLl2rKI1pnBnNvyI2Iza0ZCxiwZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'hello'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}