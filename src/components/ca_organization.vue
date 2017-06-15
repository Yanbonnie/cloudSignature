<template>	
	<div class="right_col">
		<div class="organization">
			<div class="search clf">
				<div class="search-box clf">
					<div class="row clf">
						<label for="" class="col-lg-1">CA机构：</label>
						<div class="select-box col-lg-6">
							<select name="" id="" @change="chooseMedicine($event)">
								<option value="0">请选择</option>
								<option value="1">LNCA</option>
								<option value="2">GDCA_WT_R4_Generic</option>
								<option value="3">GDCA_ECC</option>
								<option value="4">GDCA</option>
								<option value="5">NetCA</option>
								<option value="6">测试CA</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="panel-box">
				<form action="">
					<table class="table-box"> 
						<tr><th colspan="2">证书信息项</th></tr>
						<tr> 
							<td width="150px;">证书密钥标识符：</td>
							<td><input type="text" v-model="identifier" /><label for="">必填</label></td>
						</tr>
						<tr> 
							<td>导入证书</td>
							<td class="more-td"> 
								<p class="clf"> 
									<label for="">导入证书：</label>
									<select name="" id="" v-model="selected">
										<option :value="0">一级</option>
										<option :value="1">二级</option>
										<option :value="2">三级</option>
									</select>
								</p>
								<p class="clf">
									<label for="">根证书：</label>
									<input type="text"  v-model="certifibook[0]"/>
								</p>
								<p class="clf"  v-if="certifibook.length >= 2">
									<label for="">二级证书：</label>
									<input type="text"  v-model="certifibook[1]"/>
								</p>
								<p class="clf" v-if="certifibook.length >= 3">
									<label for="">三级证书：</label>
									<input type="text"  v-model="certifibook[2]"/>
								</p>
							</td>
						</tr>
					</table>
					<table class="table-box mt25"> 
						<tr><th colspan="2">CA接口项</th></tr>
						<tr> 
							<td width="150px;">数据同步接口地址：</td>
							<td><input type="text" v-model="interface.application"/><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;">应用开通接口地址：</td>
							<td><input type="text" v-model="interface.correspond"/><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;">接口通信证书：</td>
							<td><input type="text" v-model="interface.sjdata" /><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;">数据导入验证证书：</td>
							<td><input type="text" v-model="interface.verification"/><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;" v-model="interface.crl">CRL地址：</td>
							<td><input type="text" /></td>
						</tr>
						<tr> 
							<td>&nbsp;</td>
							<td>
								<input type="button" value="确定" />
								<input type="reset"  value="重置"/>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</div>	
	</div>
</template>
<script>
var organization = {
			"meta":{
				"success":true
			},
			"data":{
				"list":[
					{
						"value":"1",
						"organization":{
							"name":"LNCA",
							"certificate":{
								"identifier":"A310A60246C7D893382AC0AEB8057EAEE91DC5F3",
								"certifi":{
									"option":"0",
									"certifibook":["MIIC/zCCAmigAwIBAgIQYfAliOK10APu8ZhJFb8QiTANBgkqhkiG9w0BAQUFADCBlDELMAkGA1UEBhMCQ04xETAPBgNVBAgTCExpYW9uaW5nMREwDwYDVQQHEwhTaGVueWFuZzFBMD8GA1UEChM4TGlhb25pbmcgRGlnaXRhbCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgTWFuYWdlbWVudCBDby5MdGQxDTALBgNVBAsTBGxuY2ExDTALBgNVBAMTBExOQ0EwHhcNMDQwMzI0MDgyMjQ2WhcNMjkwMzE4MDgyMjQ2WjCBlDELMAkGA1UEBhMCQ04xETAPBgNVBAgTCExpYW9uaW5nMREwDwYDVQQHEwhTaGVueWFuZzFBMD8GA1UEChM4TGlhb25pbmcgRGlnaXRhbCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgTWFuYWdlbWVudCBDby5MdGQxDTALBgNVBAsTBGxuY2ExDTALBgNVBAMTBExOQ0EwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAN4suiem1CkEOIw+P9Ir9bH8Gqy7B2silqYZWXn8OcoTglikQY97hsagqpWaIavXL/rHefSWbu44ZfLB0LhLPnee91EhMK8LFe751zSCQMhePdpKkoAi0z+wBz9Ss5z4DYPdiBtH227Y1m6lXNilFWoY3sLarTEDrQeC3hn8+U2ZAgMBAAGjUDBOMB8GA1UdIwQYMBaAFKMQpgJGx9iTOCrArrgFfq7pHcXzMB0GA1UdDgQWBBSjEKYCRsfYkzgqwK64BX6u6R3F8zAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAHkDBpmhxXmGLrlwxwWX+jUTDZfYug3spYlLAv+aRx7neuabW8sPNS28xtmkIXjXynuEv2pcwwL+ZTMj+6X0mPCeIf/HHhsYL+jUcrAgeLgyQJ65a8vzQzMAIboiteG26sG+6siqM+WhSjBDMxpX0rweGVQTFK39hMSXg6ZmHHhO"]
								}
							}
						},
						"interface":{
							"sjdata":"http://a.a.a",
							"application":"http://a.a.a",
							"correspond":"asd",
							"verification":"asdf",
							"crl":""
						}
					},
					{
						"value":"2",
						"organization":{
							"name":"GDCA_WT_R4_Generic",
							"certificate":{
								"identifier":"1457C54C44B098FEE3E0790154BFBCAA2FA6EA0A",
								"certifi":{
									"option":"1",
									"certifibook":[
										"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"
									]
								}
							}
						},
						"interface":{
							"sjdata":"http://a.a.a",
							"application":"http://a.a.a",
							"correspond":"a",
							"verification":"a",
							"crl":""
						}
					},
					{
						"value":"3",
						"organization":{
							"name":"GDCA_ECC",
							"certificate":{
								"identifier":"118FE3FD39191D9C191F49376EAC448C55EA14BD",
								"certifi":{
									"option":"1",
									"certifibook":[
										"MIIBszCCAVegAwIBAgIIaeL+wBcKxnswDAYIKoEcz1UBg3UFADAuMQswCQYDVQQGEwJDTjEOMAwGA1UECgwFTlJDQUMxDzANBgNVBAMMBlJPT1RDQTAeFw0xMjA3MTQwMzExNTlaFw00MjA3MDcwMzExNTlaMC4xCzAJBgNVBAYTAkNOMQ4wDAYDVQQKDAVOUkNBQzEPMA0GA1UEAwwGUk9PVENBMFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAEMPCca6pmgcchsTf2UnBeL9rtp4nw+itk1Kzrmbnqo05lUwkwlWK+4OIrtFdAqnRTV7Q9v1htkv42TsIutzd126NdMFswHwYDVR0jBBgwFoAUTDKxl9kzG8SmBcHG5YtiW/CXdlgwDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCAQYwHQYDVR0OBBYEFEwysZfZMxvEpgXBxuWLYlvwl3ZYMAwGCCqBHM9VAYN1BQADSAAwRQIgG1bSLeOXp3oB8H7b53W+CKOPl2PknmWEq/lMhtn25HkCIQDaHDgWxWFtnCrBjH16/W3Ezn7/U/Vjo5xIpDoiVhsLwg==",
										"MIIC6DCCAoygAwIBAgIQEvLQkySwo+txMqp/JKgUmjAMBggqgRzPVQGDdQUAMC4xCzAJBgNVBAYTAkNOMQ4wDAYDVQQKDAVOUkNBQzEPMA0GA1UEAwwGUk9PVENBMB4XDTEzMDcyNzA3MjYwMVoXDTMzMDcyMjA3MjYwMVowgZMxCzAJBgNVBAYTAkNOMRIwEAYDVQQIDAlHdWFuZ2RvbmcxEjAQBgNVBAcMCUd1YW5nemhvdTEyMDAGA1UECgwpR1VBTkcgRE9ORyBDRVJUSUZJQ0FURSBBVVRIT1JJVFkgQ08uLExURC4xKDAmBgNVBAMMH0d1YW5nZG9uZyBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwWTATBgcqhkjOPQIBBggqgRzPVQGCLQNCAAR61twhMTWp+NoMBT2rOOVUvd5bSWcWZyhrW5cUKJJ8NTjASFDjKmYEqk16Fgz3wUzYA8eSTFhtSovsnqYjJzTqo4IBIjCCAR4wHwYDVR0jBBgwFoAUTDKxl9kzG8SmBcHG5YtiW/CXdlgwDwYDVR0TAQH/BAUwAwEB/zCBugYDVR0fBIGyMIGvMEGgP6A9pDswOTELMAkGA1UEBhMCQ04xDjAMBgNVBAoMBU5SQ0FDMQwwCgYDVQQLDANBUkwxDDAKBgNVBAMMA2FybDAqoCigJoYkaHR0cDovL3d3dy5yb290Y2EuZ292LmNuL2FybC9hcmwuY3JsMD6gPKA6hjhsZGFwOi8vbGRhcC5yb290Y2EuZ292LmNuOjM4OS9DTj1hcmwsT1U9QVJMLE89TlJDQUMsQz1DTjAOBgNVHQ8BAf8EBAMCAQYwHQYDVR0OBBYEFBGP4/05GR2cGR9JN26sRIxV6hS9MAwGCCqBHM9VAYN1BQADSAAwRQIgD8oW4KzG37YUdNcO1sU0g1SppEtOD9mE3C3Qn0doqUoCIQDFIWHnNnqOzzTdef1g+PFTEKPfd07r0drhkr3h8HYuNQ=="
									]
								}
							}
						},
						"interface":{
							"sjdata":"http://a.a.a",
							"application":"http://a.a.a",
							"correspond":"adas",
							"verification":"asdfds",
							"crl":""
						}
					},
					{
						"value":"4",
						"organization":{
							"name":"GDCA",
							"certificate":{
								"identifier":"77430910F7158B3AB011D24C7B079404F0145446",
								"certifi":{
									"option":"1",
									"certifibook":[
										"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"
									]
								}
							}
						},
						"interface":{
							"sjdata":"http://aa.bb.cc",
							"application":"http://aa.bb.cc",
							"correspond":"MIID1zCCA0CgAwIBAgIPBwACIBIIMREAAAAClHcxMA0GCSqGSIb3DQEBBQUAMIIBJDENMAsGA1UEBh4EAEMATjEbMBkGA1UECB4SAEcAdQBhAG4AZwBkAG8AbgBnMRswGQYDVQQHHhIARwB1AGEAbgBnAHoAaABvAHUxPTA7BgNVBAoeNABHAEQAQwBBACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkxRzBFBgNVBAsePgBHAHUAYQBuAGcAZABvAG4AZwAgAEMAZQByAHQAaQBmAGkAYwBhAHQAZQAgAEEAdQB0AGgAbwByAGkAdAB5MVEwTwYDVQQDHkgARwBEAEMAQQAgAEcAdQBhAG4AZwBkAG8AbgBnACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkwHhcNMTIwODMwMTYwMDAwWhcNMjAwODMwMTYwMDAwWjCBkDENMAsGA1UEBh4EAEMATjEPMA0GA1UECB4GXn9OHHcBMQ8wDQYDVQQHHgZef13eXgIxHzAdBgNVBAoeFl5/Thx3AWVwW1eLwU5mi6SLwU4tX8MxHzAdBgNVBAseFl5/Thx3AWVwW1eLwU5mi6SLwU4tX8MxGzAZBgNVBAMeEgBHAEQAQwBBZw1SoVZoi8FOZjCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAyXhfPG0W73GdDDTPxlAS++ZUXBoGb7nWftpdefoaA4R2bpgQ0dJxnBoH5ujtqVrL5Dj2Bs3Wukxk2DWrxB5c7NNG0WAmHZ/ubPNkJbD5rL0DE5VXxYAVwP0i1b9qfmqXTSVmTEBgGcJvNZA2u/c/SUMSJYX+/xAs5Nedz4Hxc7ECAwEAAaOBmzCBmDAfBgNVHSMEGDAWgBR3QwkQ9xWLOrAR0kx7B5QE8BRURjAdBgNVHQ4EFgQUxYJZrcf8Mmq4W83rTTH60AHgIpYwCwYDVR0PBAQDAgbAMBUGBSpWCwcBBAwxCoAIODg0NDQ1NTUwFQYFKlYVAQIEDGdkc2F0LmNvbS5jbjAbBgUqVhUBAwQSMDA3MTEyMDEyMDgzMTQ5Mzc2MA0GCSqGSIb3DQEBBQUAA4GBAILffGU5T5v14yQ8viyCnjDNohK3SNnYdtMmk/+IO52kJzBmomgixPqzOguHJngR0rfqIWIP0Y3Ar5H8wTBDlf3tcToBY7CSeXMUff1WyqnWy8Q+PUJl2cQV1jy6Uxx5UMj1Bw1vqEJiYxX/9KEwl1bLuRzKQ5Lgu3UNGAUXOmHt",
							"verification":"MIIDizCCAvSgAwIBAgIPByAAIAcFGBEAEAAAA4RJMA0GCSqGSIb3DQEBBQUAMIIBJDENMAsGA1UEBh4EAEMATjEbMBkGA1UECB4SAEcAdQBhAG4AZwBkAG8AbgBnMRswGQYDVQQHHhIARwB1AGEAbgBnAHoAaABvAHUxPTA7BgNVBAoeNABHAEQAQwBBACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkxRzBFBgNVBAsePgBHAHUAYQBuAGcAZABvAG4AZwAgAEMAZQByAHQAaQBmAGkAYwBhAHQAZQAgAEEAdQB0AGgAbwByAGkAdAB5MVEwTwYDVQQDHkgARwBEAEMAQQAgAEcAdQBhAG4AZwBkAG8AbgBnACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkwHhcNMDcwNTE4MTA1MDEwWhcNMDkwNTE4MTA1MDEwWjAwMREwDwYDVQQLHggARwBEAEMAQTEbMBkGA1UEAx4SAEcARABDAEFnDVKhVmiLwU5mMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDY/1oPdI+KZ4iX8jZq6svmuwbvev1X8seNDdHTSssrhXf2JkrwBHI0JLCgrha2QkOTXFhS6iofMvMULMyqDtXrB8NoC7sDoAi8hX/p9b3Ly7l7PPCQhb4W8DqpyhE0L0X5mx1zFovYTxGzu4ZIU45L89GlkAcU8BbR3lbWzjO1CQIDAQABo4GwMIGtMB0GA1UdDgQWBBQSsMJA/rxZKhLjbvg0V8xiC1AjDzAOBgNVHQ8BAf8EBAMCBsAwHwYDVR0jBBgwFoAUd0MJEPcVizqwEdJMeweUBPAUVEYwFwYFKlYVAQEBAf8ECzEzNTAwMDA3MjMyMBUGBSpWFQECAQH/BAlnZC5nb3YuY24wFwYFKlYVAQMBAf8ECzA3MDEwMDAwNzA1MBIGBQYDVR0SAQH/BAbEz7qjUkEwDQYJKoZIhvcNAQEFBQADgYEAOIyh7w1YjiTz2KwJyLTV3iScHlICFZO32yfl1TMTx1jRApRgVN83OQuk4/W8J9fyVHktEPYcNurfHpk69Oeu0mCGISn7SKBAViEbdMcELvFhLuYivOSN8FQHUUthNN9tRsQCzO5H7SOl5htWOig+l6KYygjPsloLjTWTrQ9o3gQ=",
							"crl":""
						}
					},
					{
						"value":"5",
						"organization":{
							"name":"NetCA",
							"certificate":{
								"identifier":"ccccccccc",
								"certifi":{
									"option":"0",
									"certifibook":["MIIDtTCCAx6gAwIBAgIPBwACIAkDGBEAAAAAEnOGMA0GCSqGSIb3DQEBBQUAMIIBJDENMAsGA1UEBh4EAEMATjEbMBkGA1UECB4SAEcAdQBhAG4AZwBkAG8AbgBnMRswGQYDVQQHHhIARwB1AGEAbgBnAHoAaABvAHUxPTA7BgNVBAoeNABHAEQAQwBBACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkxRzBFBgNVBAsePgBHAHUAYQBuAGcAZABvAG4AZwAgAEMAZQByAHQAaQBmAGkAYwBhAHQAZQAgAEEAdQB0AGgAbwByAGkAdAB5MVEwTwYDVQQDHkgARwBEAEMAQQAgAEcAdQBhAG4AZwBkAG8AbgBnACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkwHhcNMDkwMzE3MTYwMDAwWhcNMTEwMzE3MTYwMDAwWjBvMQ0wCwYDVQQGHgQAQwBOMQ8wDQYDVQQIHgZef04cdwExDzANBgNVBAceBl5/Xd5eAjEdMBsGA1UECh4UAEcARABDAEF/UU4KThpSoYvBTmYxHTAbBgNVBAMeFABHAEQAQwBBf1FOCk4aUqGLwU5mMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLfPkVEEwmZzCfx93Aeq4fgV0ol1ERig1NG4pvq2a8sOpARDCcjvxK/upq03aJxu3LvHS5JZWD1a4f5ktjmzBse9ma3/baVdbV47RjuY2hj+5EpWGFhpNzgFPXfRpMiU9h6rUvsx0IGo5eNL7g7HsQq0FcXaotXTwJ95qHH3BBAQIDAQABo4GbMIGYMB8GA1UdIwQYMBaAFHdDCRD3FYs6sBHSTHsHlATwFFRGMB0GA1UdDgQWBBQnfZZExxj0A9RYgPXgDjyv7zbd3jALBgNVHQ8EBAMCBsAwFQYFKlYLBwMEDBMKR0RDQVEKGqHBZjAVBgUqVhUBAgQMZ2RzYXQuY29tLmNuMBsGBSpWFQEDBBIwMDcyMDIwMDkwMzE4MDA5NTcwDQYJKoZIhvcNAQEFBQADgYEAQRvGSoRYV+VEseYWdO53ODTa0B3IC6jvfSk2R1JE5RHI4lqHVchi4pj68OV9UeiTVHj7FnP9iLxmwSvA0/MRFol2Z5WpvJYCGTNJITnYzNZYuOmoTtur7G534JKhyd8E/FSQFHmsbNYnwiUE+Rpk0FNpAa69psvuoLapWnrGsVE="]
								}
							}
						},
						"interface":{
							"sjdata":"http://aa.bb.cc",
							"application":"http://aa.bb.cc",
							"correspond":"bbb",
							"verification":"MIIDizCCAvSgAwIBAgIPByAAIAcFGBEAEAAAA4RJMA0GCSqGSIb3DQEBBQUAMIIBJDENMAsGA1UEBh4EAEMATjEbMBkGA1UECB4SAEcAdQBhAG4AZwBkAG8AbgBnMRswGQYDVQQHHhIARwB1AGEAbgBnAHoAaABvAHUxPTA7BgNVBAoeNABHAEQAQwBBACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkxRzBFBgNVBAsePgBHAHUAYQBuAGcAZABvAG4AZwAgAEMAZQByAHQAaQBmAGkAYwBhAHQAZQAgAEEAdQB0AGgAbwByAGkAdAB5MVEwTwYDVQQDHkgARwBEAEMAQQAgAEcAdQBhAG4AZwBkAG8AbgBnACAAQwBlAHIAdABpAGYAaQBjAGEAdABlACAAQQB1AHQAaABvAHIAaQB0AHkwHhcNMDcwNTE4MTA1MDEwWhcNMDkwNTE4MTA1MDEwWjAwMREwDwYDVQQLHggARwBEAEMAQTEbMBkGA1UEAx4SAEcARABDAEFnDVKhVmiLwU5mMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDY/1oPdI+KZ4iX8jZq6svmuwbvev1X8seNDdHTSssrhXf2JkrwBHI0JLCgrha2QkOTXFhS6iofMvMULMyqDtXrB8NoC7sDoAi8hX/p9b3Ly7l7PPCQhb4W8DqpyhE0L0X5mx1zFovYTxGzu4ZIU45L89GlkAcU8BbR3lbWzjO1CQIDAQABo4GwMIGtMB0GA1UdDgQWBBQSsMJA/rxZKhLjbvg0V8xiC1AjDzAOBgNVHQ8BAf8EBAMCBsAwHwYDVR0jBBgwFoAUd0MJEPcVizqwEdJMeweUBPAUVEYwFwYFKlYVAQEBAf8ECzEzNTAwMDA3MjMyMBUGBSpWFQECAQH/BAlnZC5nb3YuY24wFwYFKlYVAQMBAf8ECzA3MDEwMDAwNzA1MBIGBQYDVR0SAQH/BAbEz7qjUkEwDQYJKoZIhvcNAQEFBQADgYEAOIyh7w1YjiTz2KwJyLTV3iScHlICFZO32yfl1TMTx1jRApRgVN83OQuk4/W8J9fyVHktEPYcNurfHpk69Oeu0mCGISn7SKBAViEbdMcELvFhLuYivOSN8FQHUUthNN9tRsQCzO5H7SOl5htWOig+l6KYygjPsloLjTWTrQ9o3gQ=",
							"crl":""
						}
					},
					{
						"value":"6",
						"organization":{
							"name":"测试CA",
							"certificate":{
								"identifier":"810853",
								"certifi":{
									"option":"1",
									"certifibook":[
										"aaaa",
										"bbbb"
									]
								}
							}
						},
						"interface":{
							"sjdata":"http://a.a.a",
							"application":"http://a.a.a",
							"correspond":"ccc",
							"verification":"ddd",
							"crl":""
						}
					}
				]
			}
		}
export default {
  name: 'hello',
  data () {
    return {
      selectval:0,
	  identifier:"",   //证书密钥标识符
	  selected:0,   //导入证书选中
	  certifibook:[],  //导入证书列表
	  interface:{},
    }
  },
  computed:{
	title(){
		return this.$store.state.title;
	}
  },
  methods:{
	getData(){
		var That = this;
		/*
		this.httpGet(this.$Url.default.organization,{
			"value":That.selectval
		},function(res){
			var result = res.data;
			var param = res.config.params.value;
			
			if(result.meta.success){
				$.each(result.data.list,function(index,item){
					if(item.value == param){
						That.identifier = item.organization.certificate.identifier;
						That.selected = item.organization.certificate.certifi.option;
						That.certifibook = item.organization.certificate.certifi.certifibook;
						That.interface = item.interface;
					}else{
						if(param == 0){
							That.identifier = "";
							That.selected = 0;
							That.certifibook = [];
							That.interface = {};
						}
					}
				})
			}
		})
		*/
			var That = this;
			var result = organization;
			var param = That.selectval;
			
			if(result.meta.success){
				$.each(result.data.list,function(index,item){
					if(item.value == param){
						That.identifier = item.organization.certificate.identifier;
						That.selected = item.organization.certificate.certifi.option;
						That.certifibook = item.organization.certificate.certifi.certifibook;
						That.interface = item.interface;
					}else{
						if(param == 0){
							That.identifier = "";
							That.selected = 0;
							That.certifibook = [];
							That.interface = {};
						}
					}
				})
			}
		
	},
	chooseMedicine(event){		
		this.selectval = event.target.value;
		this.getData();
	}
  },
  mounted(){
	this.getData();
	document.title=this.title;
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/index.scss';
</style>