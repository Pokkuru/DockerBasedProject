import json
import os
from flask import Flask, jsonify, request, make_response, send_file
app = Flask(__name__)


def GetRequestFormValue(key, requestSrc):
    try:
        rawUnity = requestSrc.form["json"]
    except BaseException:
        rawUnity = False

    if rawUnity:
        val = json.loads(rawUnity)[key]
        return (val)
    else:
        raw = requestSrc.form[key]
        val = json.loads(raw)
        return (val)


@app.route("/testGET", methods=['GET'])
def TestGETRequest():
    return jsonify("GET succeeded"), 200


@app.route("/testPOST", methods=['POST'])
def TestPOSTRequest():
    testValue = GetRequestFormValue("testText", request)
    print(testValue)
    return jsonify(f"POST succeeded msg: {testValue}"), 200


if __name__ == "__main__":
    app.run(debug=True, port=5100, threaded=True)
