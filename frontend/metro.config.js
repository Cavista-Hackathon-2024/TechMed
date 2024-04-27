/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, {
    isCSSEnabled: true,
})

module.exports = withNativeWind(config, { input: './src/global.css' })