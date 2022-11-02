const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

commonConfig = {
    // entry: {
    //     main: path.resolve('../src/index.tsx'), // точка входа приложения
    // },
    // output: {
    //     path: path.join(__dirname, '../dist'), // точка выхода приложения, директория
    //     filename: '[name].[contenthash].js',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TEMPLATE',
            template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            app: path.resolve(__dirname, '../src/app'),
            components: path.resolve(__dirname, '../src/components'),
            shared: path.resolve(__dirname, '../src/shared'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

class Config {
    constructor(commonConfig) {
        this.commonConfig = commonConfig;
        this.config = commonConfig;
    }

    /** Возвращает дефолтный конфиг на основе которого был создан экземпляр. */
    getCommonConfig() {
        return this.commonConfig;
    }

    /** Возвращает конфиг.. */
    getConfig() {
        return this.config;
    }

    /** Устанавливат мод. */
    setMode(mode) {
        this.config.mode = mode;
        return this;
    }

    /** Расширяет массив правил 'module.rules'. */
    extendRules(newRule) {
        this.config.module.rules.push(newRule);
        return this;
    }

    /** Расширяет массив плагинов. */
    extendPlugins(newPlugin) {
        this.config.plugins.push(newPlugin);
        return this;
    }

    /** Добавляет параметр для resolve. */
    extendResolve(name, value) {
        this.config.resolve[name] = value;
        return this;
    }

    /** Добавляет свойство верхнего уровня. */
    addProperty(name, value) {
        this.config[name] = value;

        return this;
    }
}

exports.config = new Config(commonConfig);
